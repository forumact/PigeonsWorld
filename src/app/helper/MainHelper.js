import { useEffect } from 'react'

export function useTitle(titleOrFn) {
    useEffect(
        () => {
            document.title = `Pigeons World | ${titleOrFn}`;
        }
    );
}
