export const LOGO =
  "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const USER_AVATAR =
  "https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e";
export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};
export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";
export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/04ef06cc-5f81-4a8e-8db0-6430ba4af286/web/SA-en-20250224-TRIFECTA-perspective_db68ed9e-06c2-426f-8c22-a8d2d050c3e9_large.jpg";
export const SUPPORTED_LANGUAGES = [
  {
    identifier: "en",
    name: "English",
  },
  {
    identifier: "hindi",
    name: "Hindi",
  },
  {
    identifier: "malayalam",
    name: "Malayalam",
  },
  {
    identifier: "spanish",
    name: "Spanish",
  },
];
export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;
