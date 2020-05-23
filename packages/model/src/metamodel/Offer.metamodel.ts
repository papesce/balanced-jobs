
export interface IOfferDao {
    _id: any;
    title: string;
    description: string;
    freeText: string;
    createdAt?: string;
    updatedAt?: string;
};


// export interface IOfferSummary {
//   _id: string,
//   name: string,
//   gifURL?: string,
//   lastUpdated?: string,
//   lastSerie?: ISerie,
//   normalizedWeight?: number,
//   suggestedSerie?: ISerie,
//   seriesCount?: number,
//   synergistsCount?: number,
//   stabilizersCount?: number,
// }

export interface IOffer {
  _id: string,
  title: string,
  description: string,
  freeText: string
}

