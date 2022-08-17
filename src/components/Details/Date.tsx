import React from 'react';
import { formatDate } from '../../utils/format-date';

export type DateProps = {
  date: string;
};

export default function Date({ date }: DateProps) {
  return <>{formatDate(date)}</>;
}
