import {
  Data,
  InputOptions,
  NormalizedOption,
  NormalizedOptions,
  WithVariantPropsAndClassesList,
} from '@/core/types';
import { InputHTMLAttributes } from 'vue';
import { VanillaDatatableClassesValidKeys } from './Config';


//declare type ActionAfterCallback = (response: Array<string> | Record<string, unknown>) => void;

export type VanillaDatatableOptions = {
  selectable?: boolean,
  searchable?: boolean,
  refreshable?: boolean,
  manageSettings?: boolean,
  showTotalItems?: boolean,
  compact?: boolean,
  striped?: boolean,
};

export type VanillaDatatablePooling = {
  enable?: boolean,
  interval?: number,
  during?: number,
  stopWhenDataChanges?: boolean
};

export type VanillaDatatableFilter = {
  name: string,
  label: string,
  component: string,
  placeholder?: string,
  value?: string | undefined | null | number,
  valueResolved?: string | undefined | null | number
  options?: undefined | InputOptions | NormalizedOption[] | NormalizedOptions,
  rules?: undefined | string[]
};

export type VanillaDatatablePageOption = {
  value: string | number | undefined | null | object | boolean,
  label: string | number | undefined,
};


export type VanillaDatatableTranslations = {
  title?: string,
  subtitle?: string,
  resource?: string,
  resources?: string,

  actionsButton?: string,
  actionsSelectedRows?: string,

  actionConfirmTitle?: string,
  actionConfirmText?: string,
  actionConfirmButton?: string,
  actionCancelButton?: string,

  search?: string,
  searchPlaceholder?: string,

  selectRows?: string,
  selectedUndo?: string,
  selectAllOr?: string,
  selectAllMatching?: string,
  selectAllMatchingUndo?: string,

  filters?: string,
  filtersWithEmptyData?: string,
  filtersReset?: string,

  recordsEmpty?: string,
  settingsPerPage?: string,

  showingFrom?: string,
  nextPage?: string,
  previousPage?: string,
};

export type VanillaDatatableColumn = {
  name: string,
  label: string,
  sortable: boolean,
  native: boolean,
  hidden?: boolean,
  defaultSortAs: 'asc' | 'desc' | undefined,
  raw: boolean,
};

declare type ActionCallback = (action: VanillaDatatableAction) => void;

export type VanillaDatatableAction = {
  name: string,
  label: string,
  limit: number | string,
  permissions?: {
    view?: boolean,
    execute?: boolean
  },
  before?: {
     confirm?: {
       enable: boolean,
       title: string,
       subtitle: string,
       text: string,
       icon?: string,
       confirmButton?: string
       cancelButton?: string,
     },
     callback?: ActionCallback,
  },
  after?: {
    clearSelected?: boolean,
    resetFilters?: boolean,
    pooling?: VanillaDatatablePooling,
    callback?: ActionCallback,
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
};

export type VanillaDatatableSortedColumn = {
  column: string,
  direction: 'asc' | 'desc' | null
  sortedTimes?: number
};

export type VanillaDatatableSortedColumns = VanillaDatatableSortedColumn[];

export type VanillaDatatableQueryData = {
  search: null | undefined | string,
  perPage: number | string | keyof VanillaDatatablePageOption,
  page: number | string,
  selected: (string | number)[],
  selectedAll: boolean,
  filters: string[],
  sorting: VanillaDatatableSortedColumn[],
  action?: null | undefined | string
};

export type VanillaDatatableResultData = {
  id: string | number,
  created_at?: string,
  updated_at?: string,
  [key: string]: any
};

export type VanillaDatatableResponsePage = {
  url: string,
  label: string | number,
  active: boolean,
};

export type VanillaDatatableLinks = {
  next: string | null,
  previous: string | null,
  pages?: VanillaDatatableResponsePage[] | null,
};

export type VanillaDatatableResponse = {
  data: VanillaDatatableResultData[],
  links: VanillaDatatableLinks,
  meta: {
    current_page: number,
    from: number,
    to: number,
    total: number
  }
  [key: string]: any
};


export type VanillaDatatableActions = VanillaDatatableAction[];
export type VanillaDatatableColumns = VanillaDatatableColumn[];
export type VanillaDatatableFilters = VanillaDatatableFilter[];
export type VanillaDatatablePageOptions =  VanillaDatatablePageOption[] | { [key: string]: string | number | undefined };

export type VanillaDatatableConfiguration = {
  name: string | number,
  primaryKey: string | number,
  columns: VanillaDatatableColumns,
  actions: VanillaDatatableActions,
  filters: VanillaDatatableFilters,
  options: VanillaDatatableOptions
  translations: VanillaDatatableTranslations,
  perPageOptions: VanillaDatatablePageOptions
  pooling: VanillaDatatablePooling,
  fetchData?: any,
  fetchEndpoint: string,
  fetchMethod: string | 'GET' | 'POST' | 'PUT' | 'DELETE'

  actionsEndpoint: string,
  actionsMethod: string | 'GET' | 'POST' | 'PUT' | 'DELETE'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
};

export type VanillaDatatableProps = WithVariantPropsAndClassesList<{
  config?: VanillaDatatableConfiguration,
} & InputHTMLAttributes & Data, VanillaDatatableClassesValidKeys>;
