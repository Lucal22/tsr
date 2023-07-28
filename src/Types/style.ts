export type PostStyleProps = {
  categorySlug:
    | 'dawntrail'
    | 'endwalker'
    | 'shadowbringers'
    | 'stormblood'
    | 'heavensward'
    | 'arr'
    | 'geral';
  font?: 'xSmall' | 'small';
  hideDetails?: boolean;
};

export type PostStyleSkeleton = {
  skeleton: boolean;
};
