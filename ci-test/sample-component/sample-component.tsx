import type { ReactNode } from 'react';

export type SampleComponentProps = {
  /**
   * sets the component children.
   */
  children?: ReactNode;
};

export function SampleComponent({ children }: SampleComponentProps) {
  return (
    <div>
      {children}
    </div>
  );
}
