function HubElement (setX, setY, setWidth, setHeight, setImageIndex) {
    this.X = setX;
    this.Y = setY;
    this.Width = setWidth;
    this.Height = setHeight;
    this.ImageIndex = setImageIndex;

    return this;
}

function HubText (setX, setY, setFontSize, setColor, setContent) {
    this.X = setX;
    this.Y = setY;
    this.FontSize = setFontSize;
    this.Color = setColor;
    this.Content = setContent;


    return this;
}