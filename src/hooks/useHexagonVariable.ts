import { useState } from 'react';

export const useHexagonVariable = (
  initialVariableId: string = 'visibilidad',
) => {
  const [activeVariableId, setActiveVariableId] =
    useState<string>(initialVariableId);

  const selectVariable = (id: string) => {
    setActiveVariableId(id);
  };

  return {
    activeVariableId,
    selectVariable,
  };
};
