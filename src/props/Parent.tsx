/* curly braches because it is a named export
 rather than a default one */
import {Child} from './Child';

const Parent = () => {
    return (
        <Child color="green" onClick={() => console.log('Clicked')} />
    )
};

export default Parent;