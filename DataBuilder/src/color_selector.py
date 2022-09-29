import seaborn as sns
import matplotlib.pyplot as plt
from colormap import hex2rgb, rgb2hls, hls2rgb, rgb2hex
from copy import deepcopy

individual = ".ion-color-{0} {{\n\t--ion-color-base: var(--ion-color-{0});\n\t--ion-color-base-rgb: var(--ion-color-{0}-rgb);\n\t--ion-color-contrast: var(--ion-color-{0}-contrast);\n\t--ion-color-contrast-rgb: var(--ion-color-{0}-contrast-rgb);\n\t--ion-color-shade: var(--ion-color-{0}-shade);\n\t--ion-color-tint: var(--ion-color-{0}-tint);\n}}"
root_entry = {"color":{"hex":'--ion-color-{}: {}', "rgb":'--ion-color-{}-rgb: {}'}, "contrast":{"hex":'--ion-color-{}-contrast: {}', "rgb":'--ion-color-{}-contrast-rgb: {}'}, "shade":{"hex":'--ion-color-{}-shade: {}'}, "tint":{"hex":'--ion-color-{}-tint: {}'}}

categories = ['verb', 'mode', 'tense', 'preverb', 'subject']

colours = sns.color_palette("rocket", len(categories))

sns.palplot(colours)

hex_colours = list(colours.as_hex())

prtstr = ""

for i in range(len(categories)):
    colour = hex_colours[i]
    cat = categories[i]
    root = deepcopy(root_entry)
    rgb = hex2rgb(colour)

    root["color"]["hex"] = root["color"]["hex"].format(cat, colour)
    formatrgb = "{},{},{}".format(rgb[0],rgb[1],rgb[2])
    root["color"]["rgb"] = root["color"]["rgb"].format(cat, formatrgb)


    root["contrast"]["hex"] = root["contrast"]["hex"].format(cat, '#000000')
    root["contrast"]["rgb"] = root["contrast"]["rgb"].format(cat, '0,0,0')

    c = rgb2hls(rgb[0], rgb[1], rgb[2], normalised=False)
    tint = hls2rgb(c[0], c[1], c[2]+.1)
    
    tint = rgb2hex(tint[0], tint[1], tint[2], normalised=True)
    root['tint']['hex'] = root['tint']['hex'].format(cat, tint)
    
    shade = hls2rgb(c[0], c[1], c[2]-.1)
    shade = rgb2hex(shade[0], shade[1], shade[2], normalised=True)
    root['shade']['hex'] = root['shade']['hex'].format(cat, shade)

    prtstr += "\n"
    for key in root:
        for key2 in root[key]:
            prtstr+= "\t\t"+ root[key][key2] + ";\n"

# plt.show()




prtstr += "}\n\n"

for cat in categories:
    prtstr += individual.format(cat)
    prtstr += "\n\n"

print(prtstr)

with open("variables_template.scss", 'r') as vars:
    top = vars.read()

with open("variables.scss", 'w') as vars:
    vars.write(top + prtstr)
# print(individudal.format(category))