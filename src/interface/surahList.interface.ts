export interface SurahListResponse {
  code: number;
  data: SurahDetails[];
  status: string;
}

interface SurahDetails {
  englishName: string;
  englishNameTranslation: string;
  name: string;
  number: number;
  numberOfAyahs: number;
  revelationType: "Meccan" | "Medinan";
}
