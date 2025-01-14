/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { DivisionsService } from './services/divisions.service';
import { ClubsService } from './services/clubs.service';
import { TournamentsService } from './services/tournaments.service';
import { SeasonsService } from './services/seasons.service';
import { MembersService } from './services/members.service';
import { MatchesService } from './services/matches.service';
import { Head2HeadService } from './services/head-2-head.service';
import { HealthService } from './services/health.service';
import { InternalIdentifiersService } from './services/internal-identifiers.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    DivisionsService,
    ClubsService,
    TournamentsService,
    SeasonsService,
    MembersService,
    MatchesService,
    Head2HeadService,
    HealthService,
    InternalIdentifiersService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
