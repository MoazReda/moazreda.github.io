// Every entry is read from the certificate files Moaz supplied. Nothing is inferred.
export interface Cert {
  key: string; // image at /img/<key>.jpg
  title: string;
  issuer: string;
  date: string;
  group: 'degree' | 'work' | 'learning';
  note?: string;
  verify?: string;
}

export const certs: Cert[] = [
  {
    key: 'nu-diploma',
    title: 'B.Sc. in Computer Science, high honors',
    issuer: 'Nile University',
    date: 'Conferred 12 Sep 2026',
    group: 'degree',
  },
  {
    key: 'efg-internship',
    title: 'Internship certificate',
    issuer: 'EFG Holding',
    date: '16 Feb to 20 Mar 2025',
    group: 'work',
  },
  {
    key: 'nu-jta',
    title: 'Junior Teaching Assistant',
    issuer: 'School of IT and Computer Science, Nile University',
    date: 'Fall 2023',
    group: 'work',
  },
  {
    key: 'dl-nlp-3',
    title: 'NLP with Sequence Models',
    issuer: 'DeepLearning.AI on Coursera',
    date: '2 Jan 2026',
    group: 'learning',
    verify: 'https://coursera.org/verify/7T0W1XCCN4WN',
  },
  {
    key: 'dl-nlp-2',
    title: 'NLP with Probabilistic Models',
    issuer: 'DeepLearning.AI on Coursera',
    date: '22 Dec 2025',
    group: 'learning',
    verify: 'https://coursera.org/verify/NON80WYY7EGB',
  },
  {
    key: 'dl-nlp-1',
    title: 'NLP with Classification and Vector Spaces',
    issuer: 'DeepLearning.AI on Coursera',
    date: '21 Nov 2025',
    group: 'learning',
    verify: 'https://coursera.org/verify/ISQNGHSNM18Y',
  },
  {
    key: 'zewail-ai',
    title: 'Introduction to Artificial Intelligence and Applications (50 training hours)',
    issuer: 'Zewail City of Science and Technology',
    date: 'Aug 2023',
    group: 'learning',
  },
  {
    key: 'ecpc-2024',
    title: 'Certificate of appreciation, unofficial participation in ECPC 2024',
    issuer: 'Nile University, Egyptian Collegiate Programming Contest',
    date: '21 Oct 2024',
    group: 'learning',
  },
];
