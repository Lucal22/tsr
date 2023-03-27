export type PostStyleProps = {
  categorySlug:
    | 'endwalker'
    | 'shadowbringers'
    | 'stormblood'
    | 'heavensward'
    | 'arr'
    | 'geral'
    | null;
  font?: 'xSmall' | 'small';
};

export type PostStyleSkeleton = {
  skeleton: boolean;
};
