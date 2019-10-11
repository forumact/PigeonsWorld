import {useEffect} from 'react'

/**
 * Method used to set page title
 * @param titleOrFn
 */
export function useTitle(titleOrFn) {
    useEffect(
        () => {
            document.title = `Pigeons World | ${titleOrFn}`;
        }
    );
}

/**
 * Const used to hide Header and Footer regions.
 * @type {*[]}
 */
export const HideHeaderRegion = ['/login', '/user-register'];
