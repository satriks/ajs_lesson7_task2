export default function checNumber(phone) {
  return phone.replace(/^(8)/, '+7').replace(/[)(\s]/g, '');
}
