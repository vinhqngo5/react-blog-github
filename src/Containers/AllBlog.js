import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import React, { useState, useEffect } from "react";
import { gql } from "apollo-boost";
import { useQuery } from '@apollo/react-hooks';

import { config } from "../config";
import { Header } from "../Components/Header";
import { Loader } from '../Components/Common'
import { BlogContainer } from '../Components/Blog'
import { Card } from '../Components/Blog/Card'
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Blog from "./Blog"

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          centered
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Tất cả" {...a11yProps(0)} />
          <Tab label="Công nghệ" {...a11yProps(1)} />
          <Tab label="Tản mạn" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <Header />
      <Blog blogType="Blog" value={value} index={0}/>
      <Blog blogType="Công nghệ" value={value} index={1}/>
      <Blog blogType="Tản mạn" value={value} index={2}/>
    </div>
  );
}
