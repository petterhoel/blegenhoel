import type {LocaleString} from "./cms-types.ts";

export type LocaleStringVm = {
    no: string
    en: string
}


export function toLocaleStringVm(from?: LocaleString): LocaleStringVm {
    return {
        no: from?.no ?? '',
        en: from?.en ?? '',
    }
}