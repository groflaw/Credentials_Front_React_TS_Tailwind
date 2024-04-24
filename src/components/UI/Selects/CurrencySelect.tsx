import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

import DollarIcon from '@/assets/icons/dollar.svg'

const CurrencySelect: React.FC = () => {
  const [currency, setCurrency] = useState('usd')

  const handleChange = (event: SelectChangeEvent) => {
    setCurrency(event.target.value as string)
  }

  return (
    <div className="mt-4">
      <Typography
        variant="h6"
        sx={{
          fontSize: '16px',
          lineHeight: '20px',
          color: '#333743',
          marginBottom: '8px',
        }}
      >
        Currency Name
      </Typography>
      <Select
        fullWidth
        labelId="Currency-Select-Label"
        id="Currency-Select"
        value={currency}
        onChange={handleChange}
        IconComponent={(props) => <KeyboardArrowDownIcon {...props} />}
        sx={{
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#EBEDF0',
          },
          '& .MuiSelect-outlined': {
            display: 'flex',
            alignItems: 'center',
            paddingY: '12px',
          },
        }}
      >
        <MenuItem value={`usd`}>
          <img src={DollarIcon} alt="dollar usd icon" />
          <span className="ml-3">USD Dollar</span>
        </MenuItem>
        <MenuItem value={`eur`}>
          <img src={DollarIcon} alt="dollar usd icon" />
          <span className="ml-3">EURO</span>
        </MenuItem>
      </Select>
    </div>
  )
}

export default CurrencySelect
