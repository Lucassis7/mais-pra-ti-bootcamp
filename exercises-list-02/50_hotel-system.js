/*
  50. Desenvolva um pequeno sistema de reserva de hotéis usando JavaScript. O sistema
  deverá ser capaz de interagir com o usuário através do console do navegador e manter
  um registro das reservas e hotéis disponíveis. Utilize objetos e arrays para gerenciar as
  informações. Não é necessário interface gráfica, apenas funcionalidade lógica.
    1. Estrutura de Dados:
      ○ Hotel: Cada hotel deve ser um objeto com propriedades para id, nome,
      cidade, quartos totais e quartos disponiveis.
      ○ Reservas: Cada reserva deve ser um objeto contendo idReserva, idHotel, e
      nomeCliente.
    2. Funcionalidades:
      ○ Adicionar hotéis: Permitir que o usuário adicione novos hotéis ao sistema.
      ○ Buscar hotéis por cidade: Permitir que o usuário liste todos os hotéis
      disponíveis em uma cidade específica.
      ○ Fazer reserva: Permitir que um usuário faça uma reserva em um hotel. Isso
      deve diminuir o número de quartos disponiveis do hotel.
      ○ Cancelar reserva: Permitir que um usuário cancele uma reserva. Isso deve
      aumentar o número de quartos disponiveis no hotel correspondente.
      ○ Listar reservas: Mostrar todas as reservas, incluindo detalhes do hotel e do
      cliente.
    3. Regras de Negócio:
      ○ Um hotel só pode aceitar reservas se houver quartos disponíveis.
      ○ As reservas devem ser identificadas por um ID único e associadas a um
      único hotel.

    4. Desafios Adicionais (Opcionais):
      ○ Implementar uma função de check-in e check-out que atualize a
      disponibilidade de quartos.
      ○ Gerar relatórios de ocupação para um hotel.
      ○ Permitir que o usuário avalie o hotel após a estadia, e armazenar essas
      avaliações dentro do objeto do hotel.
*/

let hotels = [];
let reservations = [];
let nextHotel = 0;
let nextReservation = 0;

// Funcionalidades
function addHotel(name, city, totalBedrooms) {
  const hotel = {
    id: (nextHotel += 1),
    name: name,
    city: city,
    totalBedrooms: totalBedrooms,
    availableBedrooms: totalBedrooms,
  };
  hotels.push(hotel);
  console.log(`Hotel ${name} adicionado com sucesso.`);
}

function findHotelsInCity(city) {
  const hotelsInCity = hotels.filter(
    (hotel) => hotel.city.toLowerCase() === city.toLowerCase()
  );
  if (hotelsInCity.length > 0) {
    console.log(`Hotéis disponíveis em ${city}:`);
    hotelsInCity.forEach((hotel) => {
      console.log(
        `ID: ${hotel.id}, Nome: ${hotel.name}, Quartos Disponíveis: ${hotel.availableBedrooms}`
      );
    });
  } else {
    console.log(`Nenhum hotel encontrado em ${city}.`);
  }
}

function makeReservation(idHotel, clientName) {
  const hotel = hotels.find((hotel) => hotel.id === idHotel);
  if (hotel && hotel.availableBedrooms > 0) {
    hotel.availableBedrooms -= 1;
    const reservation = {
      idReservation: (nextReservation += 1),
      idHotel: idHotel,
      clientName: clientName,
    };
    reservations.push(reservation);
    console.log(
      `Reserva feita com sucesso para ${clientName} no hotel ${hotel.name}.`
    );
  } else {
    console.log(`Não há quartos disponíveis no hotel com ID ${idHotel}.`);
  }
}

function cancelReservation(idReservation) {
  const reservationIndex = reservations.findIndex(
    (reservation) => reservation.idReservation === idReservation
  );
  if (reservationIndex !== -1) {
    const reservation = reservations[reservationIndex];
    const hotel = hotels.find((hotel) => hotel.id === reservation.idHotel);
    hotel.availableBedrooms += 1;
    reservations.splice(reservationIndex, 1);
    console.log(`Reserva ${idReservation} cancelada com sucesso.`);
  } else {
    console.log(`Reserva com ID ${idReservation} não encontrada.`);
  }
}

function listReservations() {
  if (reservations.length > 0) {
    console.log("Reservas:");
    reservations.forEach((reservation) => {
      const hotel = hotels.find((hotel) => hotel.id === reservation.idHotel);
      console.log(
        `ID Reserva: ${reservation.idReservation}, Hotel: ${hotel.name}, Cliente: ${reservation.clientName}`
      );
    });
  } else {
    console.log("Nenhuma reserva encontrada.");
  }
}
