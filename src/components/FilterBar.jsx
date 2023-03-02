import React, { useState } from 'react'
import { Box, BottomNavigation, BottomNavigationAction } from '@mui/material'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import PropTypes from 'prop-types'

import './FilterBar.css'

function Item(props) {
  const { sx, ...other } = props
  return (
    <Box
      sx={{
        p: 1,
        m: 1,
        bgcolor: `rgb(213,0,0)`,
        background:
          'linear-gradient(90deg, rgba(237,67,67,1) 0%, rgba(0,32,96,1) 100%)',
        color: (theme) =>
          theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
        border: '1px solid',
        borderColor: (theme) =>
          theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
        borderRadius: 2,
        fontSize: '0.875rem',
        fontWeight: '700',
        ...sx,
      }}
      {...other}
    />
  )
}

Item.propTypes = {
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
}

function FilterBar(props) {
  const { menuOpen, setMenuOpen } = props
  const [value, setValue] = useState(0)

  return (
    <Box
      sx={{
        boxShadow: 1,
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        bgColor: 'pink',
      }}
      id="filterbar"
      variant="outlined"
      onClick={() => setMenuOpen((curr) => !curr)}
    >
      <BottomNavigation
        sx={[{ width: 350 }, { pb: 1 }]}
        position="static"
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue)
        }}
      >
        <Box className="fake-container">
          <Item sx={{ width: 100, margin: '6px', padding: '5px' }}></Item>
          <span className="fake-caption">High - Legend - Low</span>
        </Box>

        {menuOpen && (
          <BottomNavigationAction
            label="Hide Map Menu"
            icon={<VisibilityOffIcon />}
          />
        )}
        {!menuOpen && (
          <BottomNavigationAction
            label="Show Map Menu"
            icon={<RemoveRedEyeIcon />}
          />
        )}
      </BottomNavigation>
    </Box>
  )
}

export default FilterBar
