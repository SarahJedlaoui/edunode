import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useNavigate } from 'react-router-dom';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 15;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

export default function MultipleSelect() {
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);
    const navigate = useNavigate();

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;

        setPersonName(value);

        // Redirect to the corresponding page based on the selected item
        if (value === "Learn") {
            navigate('/courses');
        }
        if (value === "Teach") {
            navigate('/course');
        }
        if (value === "Certify") {
            navigate('/certifications');
        }
    };

    return (
        <>
            <div>
                <FormControl sx={{ m: 1, width: 300 }}>
                    <InputLabel id="demo-multiple-name-label">What is your purpose?</InputLabel>
                    <Select
                        labelId="demo-multiple-name-label"
                        id="demo-multiple-name"
                        value={personName}
                        onChange={handleChange}
                        input={<OutlinedInput label="Name" />}
                        MenuProps={MenuProps}
                    >
                        <MenuItem
                            key="Learn"
                            value="Learn"
                            style={getStyles("Learn", personName, theme)}
                        >
                            Learn
                        </MenuItem>
                        <MenuItem
                            key="Teach"
                            value="Teach"
                            style={getStyles("Teach", personName, theme)}
                        >
                            Teach
                        </MenuItem>
                        <MenuItem
                            key="Certify"
                            value="Certify"
                            style={getStyles("Certify", personName, theme)}
                        >
                            Certify
                        </MenuItem>
                    </Select>
                </FormControl>
            </div >
        </>
    );
}
