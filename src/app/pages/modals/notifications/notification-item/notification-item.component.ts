import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {of} from 'rxjs';
import {Store} from '@ngxs/store';
import {NotificationsState} from '../../../../core/store/notification-topics/notifications.state';
import {catchError, finalize, map, take, takeUntil} from 'rxjs/operators';
import {FormControl} from '@angular/forms';
import {OnDestroyHook} from '../../../../core/on-destroy-hook';
import {SubscribeToTopic, UnsubscribeToTopic} from '../../../../core/store/notification-topics/notifications.actions';

@Component({
    selector: 'beping-notification-item',
    templateUrl: './notification-item.component.html',
    styleUrls: ['./notification-item.component.css']
})
export class NotificationItemComponent extends OnDestroyHook implements OnInit {

    @Input() label: string;
    @Input() topic: string;
    @Output() subscribe: EventEmitter<string> = new EventEmitter<string>();
    @Output() unsubscribe: EventEmitter<string> = new EventEmitter<string>();

    isSubscribe: FormControl = new FormControl();
    loading = false;

    constructor(
        private readonly store: Store
    ) {
        super();
    }

    ngOnInit(): void {
        this.store.select(NotificationsState.topics).pipe(
            map((topics: string[]) => topics.includes(this.topic)),
            takeUntil(this.ngUnsubscribe)
        ).subscribe((subscribed) => {
            this.isSubscribe.setValue(subscribed, {emitEvent: false});
        });
        this.isSubscribe.valueChanges.pipe(
            takeUntil(this.ngUnsubscribe)
        ).subscribe(value => {
            this.toggleClicked(value);
        });

    }

    toggleClicked(value: boolean) {
        this.loading = true;
        if (value) {
            this.store.dispatch(new SubscribeToTopic(this.topic)).pipe(
                catchError((e) => {
                    console.log('error', e);
                    this.isSubscribe.setValue(false, {emitEvent: false});
                    return of();
                }),
                take(1),
                finalize(() => {
                    this.loading = false;
                })
            ).subscribe();
        } else {
            this.store.dispatch(new UnsubscribeToTopic(this.topic)).pipe(
                catchError((e) => {
                    console.log('error', e);
                    this.isSubscribe.setValue(true, {emitEvent: false});
                    return of();
                }),
                take(1),
                finalize(() => {
                    this.loading = false;
                })
            ).subscribe();
        }
    }
}
