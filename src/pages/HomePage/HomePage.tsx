import React from 'react';
import { Box, Button, Divider } from '@material-ui/core';
import { Email, Facebook, Instagram, Phone, WhatsApp } from '@material-ui/icons';
import { RdsContainer, RdsText } from '@rdsystem/components';
import { address, email, facebook, instagram, phone, whatsapp } from 'src/constants/links';

const HomePage = () => {
  return (
    <RdsContainer maxWidth="xs">
      <RdsText align="center" margin="8px 0 12px" color="primary">
        Entre em contato conosco!
      </RdsText>

      <Box margin="16px 0 8px" display="flex" justifyContent="center">
        <Button onClick={() => window.open(phone, '_blank')} style={{ textTransform: 'initial' }} fullWidth>
          <Phone />
          <RdsText margin="0 0 0 8px">48 3247-6564</RdsText>
        </Button>
      </Box>

      <Box margin="0 0 8px" display="flex" justifyContent="center">
        <Button onClick={() => window.open(whatsapp, '_blank')} style={{ textTransform: 'initial' }} fullWidth>
          <WhatsApp />
          <RdsText margin="0 0 0 8px">48 98401-3887</RdsText>
        </Button>
      </Box>

      <Box margin="0 0 8px" display="flex" justifyContent="center">
        <Button onClick={() => window.open(instagram, '_blank')} style={{ textTransform: 'initial' }} fullWidth>
          <Instagram />
          <RdsText margin="0 0 0 8px">@continenteoleo</RdsText>
        </Button>
      </Box>

      <Box margin="0 0 8px" display="flex" justifyContent="center">
        <Button onClick={() => window.open(facebook, '_blank')} style={{ textTransform: 'initial' }} fullWidth>
          <Facebook />
          <RdsText margin="0 0 0 8px">@continente.oleo</RdsText>
        </Button>
      </Box>

      <Box margin="0 0 16px" display="flex" justifyContent="center">
        <Button onClick={() => window.open(email, '_blank')} style={{ textTransform: 'initial' }} fullWidth>
          <Email />
          <RdsText margin="0 0 0 8px">continentetrocadeoleo@outlook.com</RdsText>
        </Button>
      </Box>

      <Divider />

      <RdsText align="center" margin="16px 0 16px" color="primary">
        Horário de funcionamento
      </RdsText>
      <RdsText align="center" margin="0 0 4px">
        Segunda a sexta das 8h às 18h30
      </RdsText>
      <RdsText align="center" margin="0 0 16px">
        Sábado das 8h ao meio-dia
      </RdsText>

      <Divider />

      <RdsText align="center" margin="16px 0 12px" color="primary">
        Venha nos conhecer!
      </RdsText>
      <Box margin="0 0 16px" display="flex" justifyContent="center">
        <Button onClick={() => window.open(address, '_blank')} style={{ textTransform: 'initial' }} fullWidth>
          <RdsText margin="0 0 0 8px">
            Rodovia SC-281, km 4 - Sertão do Maruim
            <br />
            São José/SC
          </RdsText>
        </Button>
      </Box>
    </RdsContainer>
  );
};

export default HomePage;
