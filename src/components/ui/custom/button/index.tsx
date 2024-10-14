import React from 'react';
import { Loader2 } from "lucide-react";
import { Button, ButtonProps } from "./button";

type CustButtonProps = ButtonProps & {
    children: React.ReactNode;
    isLoading?: boolean;
    disabled?: boolean;
};

const CustButton = React.forwardRef<HTMLButtonElement, CustButtonProps>(
    (props, ref) => {
        const {isLoading, disabled} = props;
    
        return (
            <Button 
                {...props} 
                ref={ref}
                disabled={isLoading || disabled}
            >
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {props.children}
            </Button>
        )
    }
);

export default CustButton;
