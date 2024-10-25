export type ArticleObject = {
  id: string;
  title: string;
  image: {
    width: number;
    height: number;
    url: string;
    alt: string;
    lqip: string;
  };
};

export const articles: ArticleObject[] = [
  {
    id: "1",
    title: "Lorem Ipsum Dolor",
    image: {
      width: 5760,
      height: 3840,
      url: "https://cdn.sanity.io/images/sjfhd0gk/production/26f90a981cfa2abd931143bc5ddf42960a3e4ad9-5760x3840.jpg?fit=crop",
      alt: "alt",
      lqip: "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAUHBv/EACIQAAIBBAIBBQAAAAAAAAAAAAECAwAEBREGEjETIjJRYf/EABYBAQEBAAAAAAAAAAAAAAAAAAECA//EAB0RAAICAQUAAAAAAAAAAAAAAAECAAMEESEiQVH/2gAMAwEAAhEDEQA/AFnDcniMtApv7MwQSHfdBsA/taG+XieOHqmRxMT7euvFSjhpkmw/RpXCKCeoOgT90rkme8uyk7FgEbWz41TXnqvEg7TCzFLHWU+95VgI5yscSuoHybW6KiMdobkGR5pASfAopOYg6lClvZ//2Q==",
    },
  },
  {
    id: "2",
    title: "Lorem Ipsum Dolor",
    image: {
      width: 3072,
      height: 4608,
      url: "https://cdn.sanity.io/images/sjfhd0gk/production/1281b385ce2ffc0281ddec0e0625524f9b28e8d7-3072x4608.jpg?fit=crop",
      alt: "alt",
      lqip: "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAeABQDASIAAhEBAxEB/8QAGgAAAgIDAAAAAAAAAAAAAAAAAAYFBwECCP/EACYQAAIBAwQBAwUAAAAAAAAAAAECAwAEBgUREiExEyJBByNhcYH/xAAYAQADAQEAAAAAAAAAAAAAAAABAwQCBf/EAB4RAAICAgIDAAAAAAAAAAAAAAABAhEDIhIhE1Fh/9oADAMBAAIRAxEAPwDoBVVBu2wpEzHKY4Z2srORkKn3yKdj/DVU2f1e1OSCS2v3EjOuwcdEVETZVI8b+pwZfO703HUtrJ80pR1osqTK9W5fa1CZk26IAoqlpsgKyHjMyjzsG6orevwVc/TGrRsNiVYhfCJuLbkr2T+KmMmxrTtSsxFbRrbSJ4ZR5/da2t+wT57rMuokzABSPb3Uigl0dBzb7Yi3WCXbTHhPEV+O6KbJrxvUPVFHggeRn//Z",
    },
  },
  {
    id: "3",
    title: "Lorem Ipsum Dolor",
    image: {
      width: 4442,
      height: 2961,
      url: "https://cdn.sanity.io/images/sjfhd0gk/production/26533f414d8247b22e02e7c115eb0b3ad756e061-4442x2961.jpg?fit=crop",
      alt: "alt",
      lqip: "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAANABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAMEBQb/xAAhEAACAQQCAgMAAAAAAAAAAAABAgMABAURBhITISMxYf/EABYBAQEBAAAAAAAAAAAAAAAAAAIEBf/EABwRAAICAgMAAAAAAAAAAAAAAAACAQUEQUJRUv/aAAwDAQACEQMRAD8A4o8YupAxhhdwv2VG9VJFiPl6Oyht60TSsfz/ADi2bQxTJGhGj1X2abx92vyfOQxJLEkbJNVTZL5MRaVtuaCcfJXY9j8oqC4zN/YTNBbTBYgdgdd0U4zl6DNO0cj/2Q==",
    },
  },
  {
    id: "4",
    title: "Lorem Ipsum Dolor",
    image: {
      width: 3072,
      height: 4608,
      url: "https://cdn.sanity.io/images/sjfhd0gk/production/1281b385ce2ffc0281ddec0e0625524f9b28e8d7-3072x4608.jpg?fit=crop",
      alt: "alt",
      lqip: "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAeABQDASIAAhEBAxEB/8QAGgAAAgIDAAAAAAAAAAAAAAAAAAYFBwECCP/EACYQAAIBAwQBAwUAAAAAAAAAAAECAwAEBgUREiExEyJBByNhcYH/xAAYAQADAQEAAAAAAAAAAAAAAAABAwQCBf/EAB4RAAICAgIDAAAAAAAAAAAAAAABAhEDIhIhE1Fh/9oADAMBAAIRAxEAPwDoBVVBu2wpEzHKY4Z2srORkKn3yKdj/DVU2f1e1OSCS2v3EjOuwcdEVETZVI8b+pwZfO703HUtrJ80pR1osqTK9W5fa1CZk26IAoqlpsgKyHjMyjzsG6orevwVc/TGrRsNiVYhfCJuLbkr2T+KmMmxrTtSsxFbRrbSJ4ZR5/da2t+wT57rMuokzABSPb3Uigl0dBzb7Yi3WCXbTHhPEV+O6KbJrxvUPVFHggeRn//Z",
    },
  },
  {
    id: "5",
    title: "Lorem Ipsum Dolor",
    image: {
      width: 4442,
      height: 2961,
      url: "https://cdn.sanity.io/images/sjfhd0gk/production/26533f414d8247b22e02e7c115eb0b3ad756e061-4442x2961.jpg?fit=crop",
      alt: "alt",
      lqip: "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAANABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAMEBQb/xAAhEAACAQQCAgMAAAAAAAAAAAABAgMABAURBhITISMxYf/EABYBAQEBAAAAAAAAAAAAAAAAAAIEBf/EABwRAAICAgMAAAAAAAAAAAAAAAACAQUEQUJRUv/aAAwDAQACEQMRAD8A4o8YupAxhhdwv2VG9VJFiPl6Oyht60TSsfz/ADi2bQxTJGhGj1X2abx92vyfOQxJLEkbJNVTZL5MRaVtuaCcfJXY9j8oqC4zN/YTNBbTBYgdgdd0U4zl6DNO0cj/2Q==",
    },
  },
  {
    id: "6",
    title: "Lorem Ipsum Dolor",
    image: {
      width: 5760,
      height: 3840,
      url: "https://cdn.sanity.io/images/sjfhd0gk/production/26f90a981cfa2abd931143bc5ddf42960a3e4ad9-5760x3840.jpg?fit=crop",
      alt: "alt",
      lqip: "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAUHBv/EACIQAAIBBAIBBQAAAAAAAAAAAAECAwAEBREGEjETIjJRYf/EABYBAQEBAAAAAAAAAAAAAAAAAAECA//EAB0RAAICAQUAAAAAAAAAAAAAAAECAAMEESEiQVH/2gAMAwEAAhEDEQA/AFnDcniMtApv7MwQSHfdBsA/taG+XieOHqmRxMT7euvFSjhpkmw/RpXCKCeoOgT90rkme8uyk7FgEbWz41TXnqvEg7TCzFLHWU+95VgI5yscSuoHybW6KiMdobkGR5pASfAopOYg6lClvZ//2Q==",
    },
  },
];
