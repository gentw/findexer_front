import Swal from "sweetalert2/dist/sweetalert2.js";
import { toCommaSeparated } from "../helpers";

/**
 * Popup confirmation that Asset has been added/deleted
 * @param text 
 * @param icon 
 * @param buttonStyle 
 * @param confirmButtonText 
 * @param confirmButton 
 * @returns Swal.fire(...)
 */
export function popUpConfirmation(
    text: string,
    icon: string,
    buttonStyle: boolean,
    confirmButtonText: string,
    confirmButton: string
): any {
    return Swal.fire({
        text: text,
        icon: icon,
        buttonsStyling: buttonStyle,
        confirmButtonText: confirmButtonText,
        customClass: {
            confirmButton: confirmButton,
        },
    });
}

/**
 * Rules for Add/Edit Asset data fields
 */
export const assetDataRules = {
    type: [
        {
            required: true,
            message: "Please select type of Asset",
            trigger: "blur",
        },
    ],
    name: [
        {
            required: true,
            message: "Please input name of Asset",
            trigger: "change",
        },
    ],
    initialPricePerUnit: [
        {
            required: true,
            message: "Please input initial price per unit",
            trigger: "change",
        },
    ],
    currentPricePerUnit: [
        {
            required: true,
            message: "Please input current price per unit",
            trigger: "change",
        },
    ],
    quantity: [
        {
            required: true,
            message: "Please input number of units",
            trigger: "change",
        },
    ],
};

/**
 * If quantity then compute else (if currentValue then currentValue else 0)
 * @param quantity 
 * @param currentPricePerUnit 
 * @returns currentValue
 */
export function computeCurrentValue(quantity: string | number, currentPricePerUnit: string | number): number {
    return quantity
        ? toCommaSeparated(Number(quantity) * Number(currentPricePerUnit))
        : (currentPricePerUnit ? currentPricePerUnit : 0);
};
