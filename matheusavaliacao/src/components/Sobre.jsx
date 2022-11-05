import { Card, CircularProgress, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
const Sobre = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const url = "https://www.henriqueejuliano.com.br/";

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setNews(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div style={{ maxWidth: "70rem", margin: "0 auto" }}>
      <Typography variant="h2" textAlign={"center"}>Sobre</Typography>
      {isLoading ? (
        <Typography variant="h5" component="h2" textAlign={"center"} gutterBottom>
          {'Ricelly Henrique Tavares Reis, o "Henrique", e Edson Alves dos Reis Junior , o "Juliano", são irmãos, nascidos na cidade de Palmeirópolis, no Tocantins, filhos de Maria Tavares Reis e Edson Alves dos Reis, o grande incentivador no gosto dos dois filhos pela música sertaneja, foram Influenciados pelo sucesso da dupla João Paulo & Daniel, começaram a se apresentar nas rádios do município e para um grande público interpretando e dublando quando crianças, os sucessos da banda Mamonas Assassinas, sucesso em todo Brasil na década de 90, e a vida os obrigou a tomar um rumo diferente do que eles sempre sonharam, que foi viver da música.'}
          <img src="https://s2.glbimg.com/U9nN3Pjbnun1kdQKnxOpRLVTLGs=/0x0:3680x2456/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/N/f/LE18wdREaFVfHQsxukAw/dsc-4346.jpg.jpeg" alt="Henrique e Juliano" />
        </Typography>
      ) : (
        news.map((sobre) => (
          <Card
            variant="outlined"
            style={{
              marginBottom: "1rem",
              textAlign: "left",
              padding: "1rem",
              borderRadius: "2rem",
            }}
            key={sobre.id}
          >
            <div>
              <h2>{sobre.title}</h2>
              <div>{sobre.body}</div>
            </div>
          </Card>
        ))
      )}
    </div>
  );
};

export default Sobre;