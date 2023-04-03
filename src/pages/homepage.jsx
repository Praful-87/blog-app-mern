import { Box, Stack, Spinner, Center } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getData } from "../Redux/App/action";
import { useDispatch, useSelector } from "react-redux";
import SigleBlog from "../components/card";
export default function Homepage() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.AppReducer.data);
  const [loading, setLoading] = useState(false);
  useEffect( () => {
    async function fetchData() {
      try {
        setLoading(true);
        await dispatch(getData);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }
    fetchData();
  }, []);
  return (
    <Box>
      {loading ? (
        <Center>
          {" "}
          <Spinner
            bg="transparent"
            mt="50px"
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Center>
      ) : (
        <Stack>
          {data.length > 0 &&
            data.map((el) => {
              return <SigleBlog key={el._id} data={el} />;
            })}
        </Stack>
      )}
    </Box>
  );
}
