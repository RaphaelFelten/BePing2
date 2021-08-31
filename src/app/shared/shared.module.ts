import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RankingComponent} from './components/ranking/ranking.component';
import {IonicModule} from '@ionic/angular';
import {InfoTeamMatchComponent} from './components/info-team-match/info-team-match.component';
import {IonDotDotDotDividerComponent} from './components/ion-dot-dot-dot-divider/ion-dot-dot-dot-divider.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ListHeaderDatesComponent} from './components/list-header-dates/list-header-dates.component';
import {FavoriteBtnComponent} from './components/favorite-btn/favorite-btn.component';
import {LoadingBtnComponent} from './components/loading-btn/loading-btn.component';
import {VictoryChartComponent} from './components/victory-chart/victory-chart.component';
import {BepingCardComponent} from './components/card/beping-card.component';
import {IndividualMatchComponent} from './components/individual-match/individual-match.component';
import {TeamMatchResultComponent} from './components/team-match-result/team-match-result.component';
import {TieBreakPlayedComponent} from './components/tie-break-played/tie-break-played.component';
import {MemberNameRankingInfoComponent} from './components/member-name-ranking-info/member-name-ranking-info.component';
import {MemberVictoryChartComponent} from './components/member-victory-chart/member-victory-chart.component';
import {MemberSummaryPerRankingComponent} from './components/member-summary-per-ranking/member-summary-per-ranking.component';
import {SectionTitleComponent} from './components/section-title/section-title.component';
import {MemberLatestMatchesComponent} from './components/member-latest-matches/member-latest-matches.component';
import {RankingSummaryComponent} from './components/member-summary-per-ranking/ranking-summary/ranking-summary.component';
import {AppearDirective} from './directives/appear.directive';
import {TeamResultAdBannerComponent} from './ads/team-result-ad-banner/team-result-ad-banner.component';
import {TranslateModule} from '@ngx-translate/core';
import {WithLoadingPipe} from './pipes/with-loading.pipe';
import {MemberItemComponent} from './components/member-item/member-item.component';
import {ClubItemComponent} from './components/club-item/club-item.component';
import {WeeklyEloComponent} from './components/weekly-elo/weekly-elo.component';
import {NgChartsModule} from 'ng2-charts';
import {LocalDatePipe} from './pipes/local-date.pipe';
import {SuperTabsModule} from '@ionic-super-tabs/angular';

const COMPONENTS = [
    RankingComponent,
    InfoTeamMatchComponent,
    IonDotDotDotDividerComponent,
    ListHeaderDatesComponent,
    FavoriteBtnComponent,
    LoadingBtnComponent,
    VictoryChartComponent,
    BepingCardComponent,
    IndividualMatchComponent,
    TeamMatchResultComponent,
    TieBreakPlayedComponent,
    MemberNameRankingInfoComponent,
    MemberVictoryChartComponent,
    MemberSummaryPerRankingComponent,
    SectionTitleComponent,
    MemberLatestMatchesComponent,
    RankingSummaryComponent,
    TeamResultAdBannerComponent,
    MemberItemComponent,
    ClubItemComponent,
    WeeklyEloComponent
];
const PIPES = [
    WithLoadingPipe,
    LocalDatePipe
];
const DIRECTIVES = [
    AppearDirective
];

@NgModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    declarations: [
        COMPONENTS,
        DIRECTIVES,
        PIPES
    ],
    exports: [
        CommonModule,
        IonicModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule,
        NgChartsModule,
        SuperTabsModule,
        COMPONENTS,
        PIPES,
    ],
    imports: [
        CommonModule,
        IonicModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule,
        NgChartsModule,
        SuperTabsModule
    ]
})
export class SharedModule {
}
