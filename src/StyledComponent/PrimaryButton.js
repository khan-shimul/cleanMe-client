import { Button } from "@mui/material";
import { styled } from "@mui/styles";

const PrimaryButton = styled(Button)({
    background: '#fff',
    color: '#000E39',
    padding: '15px 20px',
    '&:hover': {
        background: "#007CFB",
        color: '#fff'
    },
});

export default PrimaryButton;