import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Typography,
  } from "@mui/material";
  import React, { useEffect, useState } from "react";
  
  const Noticias = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
  
    const url = "";
  
    useEffect(() => {
      setIsLoading(true);
      fetch(url)
        .then((response) => response.json())
        .then((respData) => {
          console.log(respData);
          setData(respData.products);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setIsLoading(false);
        });
    }, []);
  
    return (
      <Grid container spacing={2}>
        {isLoading ? (
          <div>Carregando</div>
        ) : (
          data.map((noticias) => (
            <Grid
              item={true}
              xs={12}
              md={4}
              lg={2}
              display="flex"
              alignItems="stretch"
              key={noticias.id}
            >
              <Card
                key={noticias.id}
                style={{
                  height: "100%",
                  display: "flex",
                  alignItems: "stretch",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={noticias.thumbnail}
                  alt={noticias.brand}
                />
                <CardContent style={{ display: "flex", flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="div">
                    {noticias.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {noticias.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Compartilhar</Button>
                  <Button size="small">Conheça mais</Button>
                </CardActions>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    );
  };
  
  export default Noticias;