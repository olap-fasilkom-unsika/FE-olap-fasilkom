export const Data = {
  menus: [
    {
      header: true,
      name: "Dashboard",
    },
    {
      name: "Dashboard",
      icon: "fas fa-tachometer-alt",
      url: "/",
    },

    {
      header: true,
      name: "Manage",
    },
    {
      dropdown: true,

      name: "Mahasiswa",
      icon: "fas fa-user",
      children: [
        {
          name: "Data Mahasiswa",
          url: "/mahasiswa",
        },
      ],
    },
    {
      dropdown: true,

      name: "Dosen",
      icon: "fas fa-user-tie",
      children: [
        {
          name: "Data Dosen",
          url: "/dosen",
        },
      ],
    },
    {
      dropdown: true,
      name: "Jadwal Kegiatan",
      icon: "fas fa-table",
      children: [
        {
          name: "Seminar Proposal",
          url: "/seminar-proposal",
        },
        {
          name: "Kolokium",
          url: "/kolokium",
        },
        {
          name: "Yudisium",
          url: "/yudisium",
        },
      ],
    },
  ],
};
