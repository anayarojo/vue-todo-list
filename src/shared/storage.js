
const Storage = (function() {
  const _public = {};

  _public.get = function(key, serialized = false, defaultValue = null) {
    return serialized ? 
      JSON.parse(localStorage.getItem(key) || defaultValue) : 
      localStorage.getItem(key);
  };

  _public.set = function(key, value, serialized = false) {
    value = serialized ? JSON.stringify(value) : value;
    localStorage.setItem(key, value);
  };

  _public.remove = function(key) {
    localStorage.removeItem(key);
  };

  return _public;
})();

export default Storage;
