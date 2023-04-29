import React, { useState } from "react";
import SelectComponent from "../../components/SelectComponent";
import Logo from "../../assets/images/logo.png";
import ItemMovieBooking from "./ItemMovieBooking";

const ShowTimesPage = () => {
  const listProps = [{ title: "Hồ Chí Minh", value: 1 }];
  const [locationCine, setLocationCine] = useState<string>("");
  const [location, setLocation] = useState<string>("");

  const listProps2 = [
    { title: "Cinestar quốc thanh", value: 1 },
    { title: "Cinestar hai bà trưng", value: 2 },
  ];

  const listFilm = [
    {
      title: "Con nhót mót chồng",
      img: "https://cinestar.com.vn/pictures/Cinestar/04-2023/con-nhot-mot-chong.jpg",
      description:
        '"Chuyện Xóm Tui" sẽ có bản điện ảnh với sự xuất hiện của “Ông Vua Phòng Vé” Thái Hoà. Vẫn là một câu chuyện rất đời rất xóm làng bên cạnh dàn diễn viên làm nên tên tuổi của phần phim gốc, nhưng sự tái hợp của Thu Trang và Thái Hoà trong câu chuyện mở rộng này mới là điểm nhấn tạo sự mới mẻ và tò mò! ',
      timeShow: [
        {
          date: "29/04",
          cinemaInterest: [
            "8:03",
            "10:00",
            "13:30",
            "17:00",
            "18.50",
            "18.50",
            "18.50",
            "18.50",
            "18.50",
            "18.50",
            "18.50",
            "18.50",
            "18.50",
            "18.50",
          ],
        },
        {
          date: "30/04",
          cinemaInterest: ["8:00", "10:00", "13:30", "17:00"],
        },
        {
          date: "29/04",
          cinemaInterest: ["8:05", "10:00", "13:50", "17:00", "18.50"],
        },
      ],
      bgColor: "bg-[#f18720]",
    },
    {
      title: "Trạm tàu ma",
      img: "https://cinestar.com.vn/pictures/Cinestar/04-2023/tram-tau-ma.jpg",
      description:
        "Lời đồn ma ám về nhà ga Oksu ngày càng nhiều khi những vụ án kinh hoàng liên tục xảy ra. Một đường ray cũ kỹ, một chiếc giếng bỏ hoang, những con số gây ám ảnh hay những vết thương kỳ dị trên thi thể người xấu số... Tất cả dẫn đến một bí mật đau lòng bị chôn vùi nhiều năm trước.",
      timeShow: [
        {
          date: "29/04",
          cinemaInterest: ["8:03", "10:00", "13:30", "17:00", "18.50"],
        },
        {
          date: "30/04",
          cinemaInterest: ["8:00", "10:00", "13:30", "17:00"],
        },
        {
          date: "29/04",
          cinemaInterest: ["8:05", "10:00", "13:50", "17:00", "18.50"],
        },
      ],
      bgColor: "bg-[#ba3469]",
    },
  ];

  const selectedCine = (value: string) => {
    setLocationCine(value);
  };

  return (
    <div className="mainBackground pt-8 pb-10 text-stone-100">
      <h4 className="uppercase font-bold text-2xl text-center">Hệ thống rạp</h4>
      <div className="flex flex-col w-[60%] mx-auto gap-4 py-5">
        <SelectComponent
          listOption={listProps}
          valueSelected={selectedCine}
          height={40}
          className="py-1.5 px-4 rounded-r-full rounded-bl-full"
          classNameSelectOption=" -left-10 -right-10"
        />

        <SelectComponent
          listOption={listProps2}
          valueSelected={selectedCine}
          height={85}
          className="py-1.5 px-4 rounded-r-full rounded-bl-full"
          classNameSelectOption=" -left-10 -right-10"
        />
      </div>
      <img src={Logo} alt="logo" className="h-20 mx-auto" />
      <div className="text-center w-[90%] mx-auto">
        <h1 className="text-3xl uppercase font-bold py-3">{locationCine}</h1>
        <p>
          271 Nguyễn Trãi, Phường Nguyễn Cư Trinh, Quận 1, Thành Phố Hồ Chí Minh
        </p>
        <p>
          Đặt vé: <span className="font-semibold ">099.9999.9999</span>
        </p>
        <div className="flex flex-col gap-10 pt-6">
          {listFilm.map((item, index) => (
            <ItemMovieBooking listFilm={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowTimesPage;
