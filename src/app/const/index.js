export const ItemCategory = ["Fancy", "Homing", "Racing"];

export const ItemConditions = ["Chick", "Patta", "Adult", "Pair"];

export const ItemStatus = ["Available", "SoldOut"];

export const Vr = ["Vectorized", "Rasterized"];

export const city = [
  "Chennai",
  "Coimbatore",
  "Madurai",
  "Tiruchirappalli",
  "Tiruppur",
  "Salem",
  "Erode",
  "Tirunelveli",
  "Vellore",
  "Thoothukkudi",
  "Dindigul",
  "Thanjavur",
  "Ranipet",
  "Sivakasi",
  "Karur",
  "Udhagamandalam",
  "Hosur",
  "Nagercoil",
  "Kancheepuram",
  "Kumarapalayam",
  "Karaikkudi",
  "Neyveli",
  "Cuddalore",
  "Kumbakonam",
  "Tiruvannamalai",
  "Pollachi",
  "Rajapalayam",
  "Gudiyatham",
  "Pudukkottai",
  "Vaniyambadi",
  "Ambur",
  "Nagapattinam"
];

export const PigeonCategory = [
  "All",
  "Fancy",
  "Racing",
  "Homing",
  "Chicks",
  "Patta"
];

export const RegisterFormValidate = [
  {
    field: "first_name",
    method: "isEmpty",
    validWhen: false,
    message: "First name is empty."
  },
  {
    field: "last_name",
    method: "isEmpty",
    validWhen: false,
    message: "Last name is empty."
  },
  {
    field: "user_name",
    method: "isEmpty",
    validWhen: false,
    message: "Account Name is required."
  },
  {
    field: "email",
    method: "isEmail",
    validWhen: true,
    message: "That is not a valid email."
  },
  {
    field: "password",
    method: "isEmpty",
    validWhen: false,
    message: "Password is required."
  },
  {
    field: "user_picture",
    method: "isEmpty",
    validWhen: false,
    message: "Profile Image is required."
  }
];

export const AccountFormValidation = [
  {
    field: "first_name",
    method: "isEmpty",
    validWhen: false,
    message: "First name is empty."
  },
  {
    field: "last_name",
    method: "isEmpty",
    validWhen: false,
    message: "Last name is empty."
  },
  {
    field: "username",
    method: "isEmpty",
    validWhen: false,
    message: "Username is required."
  },
  {
    field: "mobile",
    method: "matches",
    args: [/^\(?\d\d\d\)? ?\d\d\d-?\d\d\d\d$/],
    validWhen: true,
    message: "Mobile is required."
  },
  {
    field: "website",
    method: "isEmpty",
    validWhen: false,
    message: "Website is required."
  },
  {
    field: "email",
    method: "isEmail",
    validWhen: true,
    message: "Email is required."
  },
  {
    field: "city",
    method: "isEmpty",
    validWhen: false,
    message: "City is required."
  },
  {
    field: "about",
    method: "isEmpty",
    validWhen: false,
    message: "About is required."
  },
  {
    field: "user_picture",
    method: "isEmpty",
    validWhen: false,
    message: "Profile picture is required."
  }
];

export const UploadFormValidation = [
  {
    field: "item_category",
    method: "isEmpty",
    validWhen: false,
    message: "Item category is empty."
  },
  {
    field: "item_name",
    method: "isEmpty",
    validWhen: false,
    message: "Item name is empty."
  },
  {
    field: "item_description",
    method: "isEmpty",
    validWhen: false,
    message: "Description is required."
  },
  {
    field: "item_picture1",
    method: "isEmpty",
    validWhen: false,
    message: "Picture is required."
  },
  {
    field: "item_price",
    method: "isEmpty",
    validWhen: false,
    message: "Price is required."
  },
  {
    field: "item_status",
    method: "isEmpty",
    validWhen: false,
    message: "Item status is required."
  },
  {
    field: "item_conditions",
    method: "isEmpty",
    validWhen: false,
    message: "Item Conditions is required."
  },
  {
    field: "item_city",
    method: "isEmpty",
    validWhen: false,
    message: "Item City is required."
  },
  {
    field: "item_tags",
    method: "isEmpty",
    validWhen: false,
    message: "Item tags is required."
  }
];

export const FileApiArray = [
  {
    id: "1",
    url: "/api/v1/file/upload/node/pigeon/field_pigeon1"
  },
  {
    id: 2,
    url: "/api/v1/file/upload/node/pigeon/field_pigeon2"
  },
  {
    id: 3,
    url: "/api/v1/file/upload/node/pigeon/field_pigeon3"
  },
  {
    id: 4,
    url: "/api/v1/file/upload/node/pigeon/field_pigeon4"
  }
];
