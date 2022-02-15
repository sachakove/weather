import { Autocomplete, TextField, Box } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getList } from "../../redux/actions/location";
import { SearchOutlined } from "@material-ui/icons";

import useStyles from "./style";

const Search = () => {
  const { list } = useSelector((state) => state.location);
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleChange = (e, v, r) => {
    // console.log(`this is value: ${v}`);
    // console.log(e);
    // const query = e.target.value;
    console.log(r);
    if (v && v.length % 3 === 0) {
      //   console.log(v);
      //   dispatch(getList(e.target.value));
    }
  };

  useEffect(() => {
    console.log(list);
  }, [list]);

  return (
    <Autocomplete
      options={list}
      getOptionLabel={(option) => option.name}
      fullWidth
      renderInput={(params) => <TextField {...params} variant="outlined" />}
      onInputChange={(event, value, reason) =>
        handleChange(event, value, reason)
      }
    />
  );
};

export default Search;
