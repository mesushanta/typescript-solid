export interface Gas {
    lightGas(): void;
    extinguishGas(): void;
    cook(item : string);
}