import at from 'lodash/at';
import omit from 'lodash/omit';
import toArray from 'lodash/toArray';
import cloneDeep from 'lodash/cloneDeep';

export default (paths, source) => {
  if (Array.isArray(paths) && !source) {
    source = cloneDeep(paths);
    return [...source];
  }
  const parts = at(source, paths);
  const remains = Array.isArray(source)
    ? toArray(omit(source, paths))
    : omit(source, paths);
  return [...parts, remains];
};
