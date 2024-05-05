export interface ExhibitionVm {
  name: string
  year: string
  space: string
  type: string
}

export interface ExhibitionListVm {
  vm: {
    heading: string
    exhibitions: ExhibitionVm[]
  }
}
