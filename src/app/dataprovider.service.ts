import { Injectable } from '@angular/core';

@Injectable()
export class DataproviderService {

    public selectedEventTypeStorage: any;
    public selectedSuitTypeStorage: any;
    public selectedSuitColorStorage: any;

    public filteredEventTypeStorage: any;
    public filteredSuitTypeStorage: any;
    public filteredSuitColorStorage: any;

    public eventStorage: any;
    public suitTypeStorage: any;
    public suitColorStorage: any;
    public bodyTypeStorage: any;
    public bodyObjectStorage: any;

    public selectedRecommendedSuit: any;

    public constructor() { }

}
