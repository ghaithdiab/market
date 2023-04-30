
import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import { Test } from '../../components/test/test';


export const mainListItems=(
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <ProductionQuantityLimitsOutlinedIcon/>
      </ListItemIcon>
      <ListItemText primary="المنتجات" onClick={()=>console.log('fdfd')}></ListItemText>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
       <CategoryOutlinedIcon/>
      </ListItemIcon>
      <ListItemText primary="الفئات" onClick={()=><Test/>}></ListItemText>
    </ListItemButton>
  </React.Fragment>
)