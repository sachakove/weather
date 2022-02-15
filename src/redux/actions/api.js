export const API_REQUEST = "[app] API Request";

export const apiRequest = (method, url, query, body, onSuccess, onError) => ({
  type: API_REQUEST,
  payload: body,
  meta: { method, url, onSuccess, onError },
});
