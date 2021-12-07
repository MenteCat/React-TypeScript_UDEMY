/* interface to define what props Child expect
to receive. 
Typescript checks:
1. providing correct props to child when
   we show it in Parent
2. use correctly named + typed props in Child   
  */

interface ChildProps {
    color: string;
    onClick: () => void;
}

export const Child = ({color, onClick}: ChildProps) => {
    return (
        <div>
            {color}
            <button onClick={onClick}>Click me</button>
        </div>
    )
};

/* another way of defining a function component(FC) with TypeScript  */
export const SecondComponentasFC: React.FC<ChildProps> = ({color, onClick}) => {
    return (
    <div>
        {color}
        <button onClick={onClick}>Click me</button>
    </div>
    );
};
SecondComponentasFC.displayName