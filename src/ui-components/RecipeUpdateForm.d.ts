/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Recipe } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type RecipeUpdateFormInputValues = {
    title?: string;
    photo?: string;
    description?: string;
    ingredients?: string;
    steps?: string;
};
export declare type RecipeUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    photo?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    ingredients?: ValidationFunction<string>;
    steps?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RecipeUpdateFormOverridesProps = {
    RecipeUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    photo?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    ingredients?: PrimitiveOverrideProps<TextFieldProps>;
    steps?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RecipeUpdateFormProps = React.PropsWithChildren<{
    overrides?: RecipeUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    recipe?: Recipe;
    onSubmit?: (fields: RecipeUpdateFormInputValues) => RecipeUpdateFormInputValues;
    onSuccess?: (fields: RecipeUpdateFormInputValues) => void;
    onError?: (fields: RecipeUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RecipeUpdateFormInputValues) => RecipeUpdateFormInputValues;
    onValidate?: RecipeUpdateFormValidationValues;
} & React.CSSProperties>;
export default function RecipeUpdateForm(props: RecipeUpdateFormProps): React.ReactElement;
