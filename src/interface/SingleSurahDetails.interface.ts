export interface SingleSurahDetailsResponse {
  code: number;
  data: singleSura;
  status: string;
}

export interface singleSura {
  ayahs: Ayah[];
  edition: Edition;
  englishName: string;
  englishNameTranslation: string;
  name: string;
  number: number;
  numberOfAyahs: number;
  revelationType: string;
}

export interface Ayah {
  hizbQuarter: number;
  juz: number;
  manzil: number;
  number: number;
  numberInSurah: number;
  page: number;
  ruku: number;
  sajda: boolean;
  text: string;
}

export interface Edition {
  direction: string;
  englishName: string;
  format: string;
  identifier: string;
  language: string;
  name: string;
  type: string;
}
