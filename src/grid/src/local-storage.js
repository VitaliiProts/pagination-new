export function save(key, jsonData) {
  localStorage.setItem(key, JSON.stringify(jsonData));

  return jsonData;
}

export function load(key) {
  const record = localStorage.getItem(key);

  return record ? JSON.parse(record) : [];
}

export function remove(key) {
  return localStorage.removeItem(key);
}
