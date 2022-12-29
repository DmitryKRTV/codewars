class Solution {
    public static String whoLikesIt(String... names) {
        if (names.length == 0) {return "no one likes this";}
        if (names.length == 1) {return  names[0] + " likes this";}
        if (names.length == 2) {return  names[0] + " and " + names[1] + " like this";}
        if (names.length == 3) {return  names[0] + ", " + names[1] + " and " + names[2] + " like this";}
        if (names.length >= 4) {return  names[0] + ", " + names[1] + " and " + (names.length - 2) + " others like this";}
        return "";
    }
}

class BestSolution1 {
    public static String whoLikesIt(String... names) {
        switch (names.length) {
          case 0: return "no one likes this";
          case 1: return String.format("%s likes this", names[0]);
          case 2: return String.format("%s and %s like this", names[0], names[1]);
          case 3: return String.format("%s, %s and %s like this", names[0], names[1], names[2]);
          default: return String.format("%s, %s and %d others like this", names[0], names[1], names.length - 2);
        }
    }
}

class BestSolution2 {
  public static String whoLikesIt(String... names) {
    final String Template1 = "%s likes this";
    final String Template2 = "%s and %s like this";
    final String Template3 = "%s, %s and %s like this";
    final String TemplateN = "%s, %s and %d others like this";
    return
        names.length == 0 ? "no one likes this" :
        names.length == 1 ? String.format(Template1, names[0]) :
        names.length == 2 ? String.format(Template2, names[0], names[1]) :
        names.length == 3 ? String.format(Template3, names[0], names[1], names[2]) :
        String.format(TemplateN, names[0], names[1], names.length-2);
  }
}

class BestSolution3 {
    public static String whoLikesIt(String... names) {
        switch (names.length) {
          case 0:
            return "no one likes this";
          case 1:
            return names[0] + " likes this";
          case 2:
            return names[0] + " and " + names[1] + " like this";
          case 3:
            return names[0] + ", " + names[1] + " and " + names[2] + " like this";
          default:
            return names[0] + ", " + names[1] + " and " + Integer.toString((names.length) - 2) + " others like this";
        }
    }
}

import java.util.HashMap;
import java.util.Map;

class BestSolution4 {

    private static Map<Integer, String> choices = new HashMap<>();

    static {
        choices.put(0, "no one likes this");
        choices.put(1, "%s likes this");
        choices.put(2, "%s and %s like this");
        choices.put(3, "%s, %s and %s like this");
    }

    public static String whoLikesIt(String... names) {
        int namesCount = names.length;
        return namesCount <= 3 ?
                String.format(choices.get(namesCount), names) :
                String.format("%s, %s and %s others like this", names[0], names[1], namesCount - 2);
    }
}