var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var EndGate;
(function (EndGate) {
    (function (Core) {
        (function (Rendering) {
            (function (Camera) {
                var Camera2dRenderer = (function (_super) {
                    __extends(Camera2dRenderer, _super);
                    function Camera2dRenderer(renderOnto, camera) {
                                        _super.call(this, renderOnto);
                        this._camera = camera;
                        this._contextBuilder = new Camera.Camera2dCanvasContextBuilder(this._camera);
                        this.OnRendererSizeChange.Bind(this._contextBuilder.UpdateCanvasCenter);
                        this._contextBuilder.UpdateCanvasCenter(new Core.Assets.Size2d(renderOnto.width, renderOnto.height));
                        this._bufferContext = this._contextBuilder.BuildFrom(this._bufferContext);
                    }
                    Camera2dRenderer.prototype.Render = function (renderables) {
                        var context, inverseScale = this._camera.GetInverseDistanceScale();
                        this._bufferContext.save();
                        this._bufferContext.scale(inverseScale, inverseScale);
                        context = _super.prototype.Render.call(this, this.GetOnScreenRenderables(renderables));
                        this._bufferContext.restore();
                        return context;
                    };
                    Camera2dRenderer.prototype._ClearBuffer = function () {
                        var cameraScale = this._camera.GetDistanceScale();
                        (this._bufferContext).unModifiedClearRect(0, 0, this._bufferCanvas.width * cameraScale, this._bufferCanvas.height * cameraScale);
                    };
                    Camera2dRenderer.prototype.GetOnScreenRenderables = function (allRenderables) {
                        var onscreen = [], scale = this._camera.GetDistanceScale(), unscale = 1 / scale;
                        this._camera.Scale(scale, scale);
                        for(var i = 0; i < allRenderables.length; i++) {
                            if(this._camera.Intersects(allRenderables[i].GetDrawBounds())) {
                                onscreen.push(allRenderables[i]);
                            }
                        }
                        this._camera.Scale(unscale, unscale);
                        return onscreen;
                    };
                    return Camera2dRenderer;
                })(Rendering.Renderer2d);
                Camera.Camera2dRenderer = Camera2dRenderer;                
            })(Rendering.Camera || (Rendering.Camera = {}));
            var Camera = Rendering.Camera;
        })(Core.Rendering || (Core.Rendering = {}));
        var Rendering = Core.Rendering;
    })(EndGate.Core || (EndGate.Core = {}));
    var Core = EndGate.Core;
})(EndGate || (EndGate = {}));
//@ sourceMappingURL=Camera2dRenderer.js.map