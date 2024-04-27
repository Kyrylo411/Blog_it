import { Button } from 'shared/ui/Button/Button';
import { useEffect, useState } from 'react';

// delete; component for error testing
export function BugButton() {
    const [error, setError] = useState(false);

    const trowError = () => setError(true);

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button
            onClick={trowError}
        >
            Throw Error
        </Button>
    );
}
