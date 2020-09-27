interface Styles {
  colors: Record<colors, string>;
  fontSize: Record<sizes, number>;
}

type colors = 'mainColor' | 'secondaryColor';
type sizes = 's' | 'm' | 'l' | 'ml' | 'xl';

const fontSize: Record<sizes, number> = {
  s: 12,
  m: 15,
  ml: 20,
  l: 23,
  xl: 25,
};

const colors: Record<colors, string> = {
  mainColor: '#4f3c74',
  secondaryColor: '#fff',
};

export const globalStyles: Styles = {
  colors,
  fontSize,
};
