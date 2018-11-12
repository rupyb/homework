import CookiePic from './images/choc.jpg';
import Mousse from './images/mousse.jpg';
import IceCream from './images/icecream.jpg';
import ApplePie from './images/applePie.jpg';

var Data = [
    {
      name: 'Chocolate Chip Cookies',
      id: 1,
      text: 'Creamy Delight',
      ingredients: ['3 cups (380 grams) all-purpose flour', '1 teaspoon baking soda', '1 teaspoon fine sea salt',
        '2 sticks (227 grams) unsalted butter, at room temperature', '1/2 cup (100 grams) granulated sugar',
        '1 1/4 cups (247 grams) lightly packed light brown sugar', '2 large eggs, at room temperature',
        '2 teaspoons vanilla', '2 cups (340 grams) semi sweet chocolate chips'],
      directions: ['Preheat oven to 350ºF. Line baking sheets with parchment paper.', 'In a medium bowl combine the flour, baking soda, and salt.',
        'In the bowl of an electric mixer beat the butter, granulated sugar, and brown sugar until creamy, about 2 minutes.',
        'Add the vanilla and eggs.', 'Gradually beat in the flour mixture.', 'Stir in the chocolate chips.',
        'If time permits, wrap dough in plastic wrap and refrigerate for at least 24 hours but no more than 72 hours.',
        'This allows the dough to “marinate” and makes the cookies thicker, chewier, and more flavorful.',
        'Let dough sit at room temperature just until it is soft enough to scoop.', 'Divide the dough into 3-tablespoon sized balls using a large cookie scoop and drop onto prepared baking sheets.',
        'Bake for 12-15 minutes, or until golden brown.', 'Cool for 5 minutes before removing to wire racks to cool completely.'],
      image: CookiePic
    },
    {
      name: 'Mousse',
      id: 2,
      text: 'A Slice Of Heaven',
      ingredients: ['250ml (1 cup) thickened cream', '1 x 200g pkt dark cooking chocolate, coarsely chopped',
        '4 eggs, at room temperature, separated', '200g good-quality milk chocolate, coarsely chopped', '70g (1/3 cup) caster sugar',
        'Double cream, to serve', 'White chocolate, shaved, to serve'],
      directions: ['Use a clean electric beater to beat the thickened cream in a medium bowl until firm peaks form.',
        "Place the dark chocolate in a small heatproof bowl over a saucepan half-filled with simmering water (make sure the bowl doesn't touch the water). Stir with a metal spoon until chocolate melts. Remove from heat. Stir in 2 egg yolks (the mixture will become firm).",
        'Divide the cream into 2 equal portions. Set aside 1 portion. Use a large metal spoon to stir half of 1 cream portion into the dark chocolate mixture until well combined. Add the remaining half and fold to combine. Repeat with the milk chocolate and the remaining egg yolks and cream.',
        ' Use an electric beater to beat the egg whites in a large clean, dry bowl until soft peaks form. Gradually add the sugar, 1 tablespoonful at a time, beating constantly until the sugar dissolves and the mixture is thick and glossy.',
        'Fold half the egg white mixture into dark chocolate mixture until just combined. Fold the remaining egg white mixture into the milk chocolate mixture until just combined. Spoon the dark chocolate mixture among four 250ml (1-cup) capacity serving glasses. Top with the milk chocolate mixture.',
        'Place on a tray. Cover. Place in fridge for 3 hours or until set. Top with double cream and shaved white chocolate to serve.'],
      image: Mousse
    },
    {
      name: 'Ice cream',
      id: 3,
      text: 'Lickin Good',
      ingredients: ['2  cups heavy cream', '1  cup whole milk', '⅔  cup sugar', '⅛  teaspoon fine sea salt', '6  large egg yolks', 'flavoring'],
      directions: ['In a small pot, simmer heavy cream, milk, sugar and salt until sugar completely dissolves, about 5 minutes. Remove pot from heat. In a separate bowl, whisk yolks. Whisking constantly, slowly whisk about a third of the hot cream into the yolks, then whisk the yolk mixture back into the pot with the cream. Return pot to medium-low heat and gently cook until mixture is thick enough to coat the back of a spoon (about 170 degrees on an instant-read thermometer).',
        'Strain through a fine-mesh sieve into a bowl. Cool mixture to room temperature. Cover and chill at least 4 hours or overnight. Churn in an ice cream machine according to manufacturers’ instructions. Serve directly from the machine for soft serve, or store in freezer until needed.'],
      image: IceCream
    },
    {
      name: 'Apple pie',
      id: 4,
      text: 'Home Sweet Home',
      ingredients: ['1/2 cup sugar', '1/2 cup packed brown sugar', '3 tablespoons all-purpose flour',
        '1 teaspoon ground cinnamon', '1/4 teaspoon ground ginger', '1/4 teaspoon ground nutmeg', '6 to 7 cups thinly sliced peeled tart apples',
        '1 tablespoon lemon juice', 'Pastry for double-crust pie (9 inches)', '1 tablespoon butter', '1 large egg white', 'Additional sugar'],
      directions: ['In a small bowl, combine the sugars, flour and spices; set aside. In a large bowl, toss apples with lemon juice. Add sugar mixture; toss to coat.',
        'Line a 9-in. pie plate with bottom crust; trim crust even with edge. Fill with apple mixture; dot with butter. Roll out remaining dough to fit top of pie. Place over filling. Trim, seal and flute edges. Cut slits in crust.',
        'Beat egg white until foamy; brush over crust. Sprinkle with sugar. Cover edges loosely with foil.',
        'Beat egg white until foamy; brush over crust. Sprinkle with sugar. Cover edges loosely with foil.',
        'Bake at 375° for 25 minutes. Remove foil and bake until crust is golden brown and filling is bubbly, 20-25 minutes longer. Cool on a wire rack.'],
      image: ApplePie
    }
  ];

export default Data;