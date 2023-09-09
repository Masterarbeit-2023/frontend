import React, { ReactNode } from 'react';

interface ContainerProps {
    children: ReactNode;
  }
const Container = (props: ContainerProps) => {


    return (
        <div className="px-32 py-8">
            {props.children}
        </div>
    );
}

export default Container;